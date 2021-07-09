import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "xxxx",
    ClientId: "dddd"
}

export default new CognitoUserPool(poolData);