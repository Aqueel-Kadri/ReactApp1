reusable functionalities (eg: sorting)


login email password values send api
if(user doesnt exist)
{
    signup page with email and password values
}
register api 

registerApiBody = {
        externalUserId: 13,
        email: uInfo.email,
        password: "12345",
        displayName: uInfo.displayName,
        nickName: userInputValues.nickName ? userInputValues.nickName : "", // Static Start
        firstName: uInfo.firstName,
        lastName: uInfo.lastName, // Static end
        dob: 123456789012,
        age: 12,
        sex: 2,
        phone: "8329335604",
        // phone: "8302739844",
        // phone: "8854039818",
        // phone: "8005757607",
        profilePhotoURL:
          "https://i.pinimg.com/originals/3f/d3/2d/3fd32d09a4cfca7564e3c9478e1ded81.jpg",
        roles: ["HOST"],
    };