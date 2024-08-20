routerAdd(
  "POST",
  "/api/colorme/auth",
  (c) => {
    const data = $apis.requestInfo(c).data;
    console.log(JSON.stringify(data));

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
    // return $apis.recordAuthResponse($app, c, record);
  },
  $apis.activityLogger($app)
);

onModelAfterUpdate((e) => {
  console.log("user updated...", e.model.get("email"));
}, "users");
