/**
 * @typedef {Object} Data
 * @property {string} accessToken - The access token string.
 * @property {string} password - Random generated password
 * @property {Object} colormeShopData
 * @property {string} colormeShopData.id
 * @property {string} colormeShopData.login_id
 * @property {string} colormeShopData.name1
 * @property {string} colormeShopData.user_mail
 * @property {string} colormeShopData.shop_mail_1
 * @property {string} colormeShopData.url
 * @property {string} colormeShopData.shop_logo_url
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

    const userCollection = $app.dao().findCollectionByNameOrId("users");

    const userRecord = new Record(userCollection);

    const userForm = new RecordUpsertForm($app, userRecord);

    const { id, login_id, name1, user_mail, shop_mail_1, url, shop_logo_url } =
      colormeShopData;

    userForm.loadData({
      username: name1,
      email: user_mail,
      emailVisibility: true,
      password,
      passwordConfirm: password,
      lastLogin: new Date(),
    });

    userForm.submit();
    return c.json(200, { user: userRecord });

    // // create shop
    // const shopData = new DynamicModel({
    //   userId: id,
    //   login_id,
    //   name: name1,
    //   email: shop_mail_1,
    //   url,
    //   logoUrl: shop_logo_url,
    //   makeDate,
    // });

    // save user
    // userData.save();
    // shopData.save();

    // generate access token
    // const token = generateAccessToken(userData.id);

    // update user's access token
    // userData.set("accessToken", token);
    // userData.save();

    // save user's access token in the session
    // $app.session().set("accessToken", token);

    // // Add more fields if needed
    // // data.phone =...;
    // // data.password =...;
    // // data.save();

    // // Add more fields if needed
    // // data.phone =...;
    // // data.password =...;
    // // data.save();

    // // Add more fields if needed
    //

    // Setup data structure
    // const data = new DynamicModel({
    //   phone: "",
    //   password: "",
    // });
    // c.bind(data);
    // const record = $app
    //   .dao()
    //   .findFirstRecordByData("users", "phone", data.phone);
    // if (!record.validatePassword(data.password)) {
    //   throw new BadRequestError("invalid credentials");
    // }
    return c.json(200, { message: "Hello " + data.accessToken });
  },
  $apis.activityLogger($app)
);

onModelAfterUpdate((e) => {
  console.log("user updated...", e.model.get("email"));
}, "users");
