var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova, cordovaInstance, checkAvailability } from '@ionic-native/core';
var PLNObject = /** @class */ (function () {
    function PLNObject(title, options) {
        if (checkAvailability(PhonegapLocalNotificationOriginal.pluginRef, null, PhonegapLocalNotificationOriginal.pluginName) === true) {
            this._objectInstance = new Notification(title, options);
        }
    }
    PLNObject.prototype.close = function () { return cordovaInstance(this, "close", { "sync": true }, arguments); };
    return PLNObject;
}());
export { PLNObject };
var PhonegapLocalNotificationOriginal = /** @class */ (function (_super) {
    __extends(PhonegapLocalNotificationOriginal, _super);
    function PhonegapLocalNotificationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * A global object that lets you interact with the Notification API.
     * @param title {string} Title of the local notification.
     * @param Options {LocalNotificationOptions} An object containing optional property/value pairs.
     * @returns {PLNObject}
     */
    PhonegapLocalNotificationOriginal.prototype.create = function (title, options) {
        return new PLNObject(title, options);
    };
    PhonegapLocalNotificationOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    PhonegapLocalNotificationOriginal.pluginName = "Phonegap Local Notifications";
    PhonegapLocalNotificationOriginal.plugin = "phonegap-plugin-local-notification";
    PhonegapLocalNotificationOriginal.pluginRef = "Notification";
    PhonegapLocalNotificationOriginal.repo = "https://github.com/phonegap/phonegap-plugin-local-notification";
    PhonegapLocalNotificationOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return PhonegapLocalNotificationOriginal;
}(IonicNativePlugin));
var PhonegapLocalNotification = new PhonegapLocalNotificationOriginal();
export { PhonegapLocalNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bob25lZ2FwLWxvY2FsLW5vdGlmaWNhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTywrQ0FLTCxpQkFBaUIsRUFDbEIsTUFBTSxvQkFBb0IsQ0FBQzs7SUFVMUIsbUJBQVksS0FBYSxFQUFFLE9BQWlDO1FBQzFELElBQ0UsaUJBQWlCLENBQ2YseUJBQXlCLENBQUMsU0FBUyxFQUNuQyxJQUFJLEVBQ0oseUJBQXlCLENBQUMsVUFBVSxDQUNyQyxLQUFLLElBQUksRUFDVjtZQUNBLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQUdELHlCQUFLO29CQTlCUDs7OztJQXVHK0MsNkNBQWlCOzs7O0lBQzlEOzs7OztPQUtHO0lBQ0gsMENBQU0sR0FBTixVQUFPLEtBQWEsRUFBRSxPQUFpQztRQUNyRCxPQUFPLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBT0QscURBQWlCOzs7Ozs7b0NBdkhuQjtFQXVHK0MsaUJBQWlCO1NBQW5ELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmEsXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgY2hlY2tBdmFpbGFiaWxpdHlcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZGVjbGFyZSBjb25zdCBOb3RpZmljYXRpb246IGFueTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBQTE5PYmplY3Qge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIG9wdGlvbnM6IExvY2FsTm90aWZpY2F0aW9uT3B0aW9ucykge1xuICAgIGlmIChcbiAgICAgIGNoZWNrQXZhaWxhYmlsaXR5KFxuICAgICAgICBQaG9uZWdhcExvY2FsTm90aWZpY2F0aW9uLnBsdWdpblJlZixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUGhvbmVnYXBMb2NhbE5vdGlmaWNhdGlvbi5wbHVnaW5OYW1lXG4gICAgICApID09PSB0cnVlXG4gICAgKSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyBOb3RpZmljYXRpb24odGl0bGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhbE5vdGlmaWNhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogU2V0cyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBub3RpZmljYXRpb24uIE9uZSBvZiBcImF1dG9cIiwgXCJsdHJcIiBvciBcInJ0bFwiXG4gICAqL1xuICBkaXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBTZXRzIHRoZSBsYW5ndWFnZSBvZiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICBsYW5nPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBib2R5IG9mIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIGJvZHk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGlkZW50aWZ5aW5nIHRhZyBvZiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICB0YWc/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGljb24gb2YgdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBQaG9uZWdhcCBMb2NhbCBOb3RpZmljYXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIExvY2FsIE5vdGlmaWNhdGlvbiBwbHVnaW4gZ2l2ZXMgZGV2ZWxvcGVycyB0aGUgYWJpbGl0eSB0byBwb3N0IG5vdGlmaWNhdGlvbnMgZnJvbSB0aGVpciBhcHAgdGhhdCBzaG93IHVwIGluIHRoZSBkZXZpY2XigJlzIG5vdGlmaWNhdGlvbiBhcmVhLlxuICogVGhlIEFQSSBmb3IgdGhlIGxvY2FsIG5vdGlmaWNhdGlvbiBwbHVnaW4gZm9sbG93cyB0aGUgVzNDIFdlYiBOb3RpZmljYXRpb25zIHNwZWNpZmljYXRpb246IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ub3RpZmljYXRpb25zL1xuICpcbiAqIEB1c2FnZVxuICogYGBgXG4gKiBpbXBvcnQgeyBQaG9uZWdhcExvY2FsTm90aWZpY2F0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9waG9uZWdhcC1sb2NhbC1ub3RpZmljYXRpb24vbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbE5vdGlmaWNhdGlvbjogUGhvbmVnYXBMb2NhbE5vdGlmaWNhdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5sb2NhbE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oXG4gKiAgIChwZXJtaXNzaW9uKSA9PiB7XG4gKiAgICAgaWYgKHBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xuICpcbiAqICAgICAgIC8vIENyZWF0ZSB0aGUgbm90aWZpY2F0aW9uXG4gKiAgICAgICB0aGlzLmxvY2FsTm90aWZpY2F0aW9uLmNyZWF0ZSgnTXkgVGl0bGUnLCB7XG4gKiAgICAgICAgIHRhZzogJ21lc3NhZ2UxJyxcbiAqICAgICAgICAgYm9keTogJ015IGJvZHknLFxuICogICAgICAgICBpY29uOiAnYXNzZXRzL2ljb24vZmF2aWNvbi5pY28nXG4gKiAgICAgICB9KTtcbiAqXG4gKiAgICAgfVxuICogICB9XG4gKiApO1xuICpcbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBMb2NhbE5vdGlmaWNhdGlvbk9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQaG9uZWdhcCBMb2NhbCBOb3RpZmljYXRpb25zJyxcbiAgcGx1Z2luOiAncGhvbmVnYXAtcGx1Z2luLWxvY2FsLW5vdGlmaWNhdGlvbicsXG4gIHBsdWdpblJlZjogJ05vdGlmaWNhdGlvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGhvbmVnYXAvcGhvbmVnYXAtcGx1Z2luLWxvY2FsLW5vdGlmaWNhdGlvbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQaG9uZWdhcExvY2FsTm90aWZpY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQSBnbG9iYWwgb2JqZWN0IHRoYXQgbGV0cyB5b3UgaW50ZXJhY3Qgd2l0aCB0aGUgTm90aWZpY2F0aW9uIEFQSS5cbiAgICogQHBhcmFtIHRpdGxlIHtzdHJpbmd9IFRpdGxlIG9mIHRoZSBsb2NhbCBub3RpZmljYXRpb24uXG4gICAqIEBwYXJhbSBPcHRpb25zIHtMb2NhbE5vdGlmaWNhdGlvbk9wdGlvbnN9IEFuIG9iamVjdCBjb250YWluaW5nIG9wdGlvbmFsIHByb3BlcnR5L3ZhbHVlIHBhaXJzLlxuICAgKiBAcmV0dXJucyB7UExOT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKHRpdGxlOiBzdHJpbmcsIG9wdGlvbnM6IExvY2FsTm90aWZpY2F0aW9uT3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUExOT2JqZWN0KHRpdGxlLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXF1ZXN0cyBwZXJtaXNzaW9uIGZyb20gdGhlIHVzZXIgdG8gc2hvdyBhIGxvY2FsIG5vdGlmaWNhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==