/**
 * 加密工具类
 */
/**
 * 加密
 * @param {*} data 
 * @param {*} key 
 * @param {*} iv 
 */
function getAesString(data,key,iv){
    var key  = CryptoJS.enc.Utf8.parse(key);
    var iv   = CryptoJS.enc.Utf8.parse(iv);
    var encrypted =CryptoJS.AES.encrypt(data,key,
        {
            iv:iv,
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7
        });
    return encrypted.toString();    //返回的是base64格式的密文
}
/**
 * 解密
 * @param {*} encrypted 
 * @param {*} key 
 * @param {*} iv 
 */
function getDAesString(encrypted,key,iv){
    var key  = CryptoJS.enc.Utf8.parse(key);
    var iv   = CryptoJS.enc.Utf8.parse(iv);
    var decrypted =CryptoJS.AES.decrypt(encrypted,key,
        {
            iv:iv,
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7
        });
    return decrypted.toString(CryptoJS.enc.Utf8);     
}
/**
 * 返回加密后的结果
 * @param {*} data 
 */
function getAES(data){ 
    var key  = 'qwernjkfereweryh';  //密钥
    var iv   = '0123456789abcdef';
    var encrypted =getAesString(data,key,iv); //密文
    var encrypted1 =CryptoJS.enc.Utf8.parse(encrypted);
    return encrypted;
}
/**
 * 返回解密后的结果
 * @param {*} data 
 */
function getDAes(data){
    var key  = 'qwernjkfereweryh';  //密钥
    var iv   = '0123456789abcdef';
    var decryptedStr =getDAesString(data,key,iv);
    return decryptedStr;
}