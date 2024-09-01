/**
 * @typedef {Object} Data
 * @property {string} accessToken - The access token string.
 * @property {string} password - Random generated password
 * @property {Object} colormeShopData
 * @property {string} colormeShopData.id
 * @property {string} colormeShopData.name
 * @property {string} colormeShopData.email
 * @property {string} colormeShopData.shopMail
 * @property {string} colormeShopData.url
 * @property {string} colormeShopData.shopLogoUrl
 */

routerAdd(
  "POST",
  "/api/colorme/auth",
  (c) => {
    /** @type {Data} */
    const data = $apis.requestInfo(c).data;
    const { accessToken, colormeShopData, password } = data;

    if (!accessToken) {
      throw new ApiError(500, "access token is missing", {
        accessToken: new ValidationError(
          "invalid_credential",
          "Invalid or missing access token"
        ),
      });
    }

    if (!colormeShopData || !colormeShopData.id) {
      throw new ApiError(500, "colorme shop data is missing or invalid", {
        colormeShopData: new ValidationError(
          "invalid_data",
          "Invalid or missing colorme shop data"
        ),
      });
    }

    const {
      id: colormeId,
      name,
      email,
      shopMail,
      url,
      shopLogoUrl,
    } = colormeShopData;

    const createNewUser = () => {
      const userCollection = $app.dao().findCollectionByNameOrId("users");
      const userRecord = new Record(userCollection);
      const userForm = new RecordUpsertForm($app, userRecord);

      userForm.loadData({
        username: name,
        email,
        emailVisibility: true,
        password,
        passwordConfirm: password,
        lastLogin: new Date(),
      });

      userForm.submit();

      const shopCollection = $app.dao().findCollectionByNameOrId("shops");
      const shopRecord = new Record(shopCollection);
      const shopForm = new RecordUpsertForm($app, shopRecord);

      shopForm.loadData({
        userId: userRecord.id,
        shopEmail: shopMail,
        shopLogoUrl: shopLogoUrl,
        url: url,
      });

      shopForm.submit();

      const authProviderCollection = $app
        .dao()
        .findCollectionByNameOrId("authProviders");
      const authProviderRecord = new Record(authProviderCollection);
      const authProviderForm = new RecordUpsertForm($app, authProviderRecord);

      authProviderForm.loadData({
        userId: userRecord.id,
        provider: "colorme",
        providerId: colormeId,
        accessToken,
      });

      authProviderForm.submit();

      return authProviderRecord;
    };

    let authProvider = null;
    try {
      authProvider = $app
        .dao()
        .findFirstRecordByData("authProviders", "providerId", colormeId);
    } catch (e) {
      authProvider = createNewUser();
    }

    return c.json(200, {
      authProvider,
    });
  },
  $apis.activityLogger($app)
);

onModelAfterUpdate((e) => {
  console.log("user updated...", e.model.get("email"));
}, "users");
