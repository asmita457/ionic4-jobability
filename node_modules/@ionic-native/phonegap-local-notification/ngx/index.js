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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaInstance, checkAvailability } from '@ionic-native/core';
var PLNObject = /** @class */ (function () {
    function PLNObject(title, options) {
        if (checkAvailability(PhonegapLocalNotification.pluginRef, null, PhonegapLocalNotification.pluginName) === true) {
            this._objectInstance = new Notification(title, options);
        }
    }
    PLNObject.prototype.close = function () { return cordovaInstance(this, "close", { "sync": true }, arguments); };
    return PLNObject;
}());
export { PLNObject };
var PhonegapLocalNotification = /** @class */ (function (_super) {
    __extends(PhonegapLocalNotification, _super);
    function PhonegapLocalNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * A global object that lets you interact with the Notification API.
     * @param title {string} Title of the local notification.
     * @param Options {LocalNotificationOptions} An object containing optional property/value pairs.
     * @returns {PLNObject}
     */
    PhonegapLocalNotification.prototype.create = function (title, options) {
        return new PLNObject(title, options);
    };
    PhonegapLocalNotification.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    PhonegapLocalNotification.pluginName = "Phonegap Local Notifications";
    PhonegapLocalNotification.plugin = "phonegap-plugin-local-notification";
    PhonegapLocalNotification.pluginRef = "Notification";
    PhonegapLocalNotification.repo = "https://github.com/phonegap/phonegap-plugin-local-notification";
    PhonegapLocalNotification.platforms = ["Android", "Browser", "iOS", "Windows"];
    PhonegapLocalNotification = __decorate([
        Injectable()
    ], PhonegapLocalNotification);
    return PhonegapLocalNotification;
}(IonicNativePlugin));
export { PhonegapLocalNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bob25lZ2FwLWxvY2FsLW5vdGlmaWNhdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTywrQ0FLTCxpQkFBaUIsRUFDbEIsTUFBTSxvQkFBb0IsQ0FBQzs7SUFVMUIsbUJBQVksS0FBYSxFQUFFLE9BQWlDO1FBQzFELElBQ0UsaUJBQWlCLENBQ2YseUJBQXlCLENBQUMsU0FBUyxFQUNuQyxJQUFJLEVBQ0oseUJBQXlCLENBQUMsVUFBVSxDQUNyQyxLQUFLLElBQUksRUFDVjtZQUNBLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQUdELHlCQUFLO29CQTlCUDs7OztJQXVHK0MsNkNBQWlCOzs7O0lBQzlEOzs7OztPQUtHO0lBQ0gsMENBQU0sR0FBTixVQUFPLEtBQWEsRUFBRSxPQUFpQztRQUNyRCxPQUFPLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBT0QscURBQWlCOzs7Ozs7SUFoQk4seUJBQXlCO1FBRHJDLFVBQVUsRUFBRTtPQUNBLHlCQUF5QjtvQ0F2R3RDO0VBdUcrQyxpQkFBaUI7U0FBbkQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YSxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luLFxuICBjaGVja0F2YWlsYWJpbGl0eVxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IE5vdGlmaWNhdGlvbjogYW55O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFBMTk9iamVjdCB7XG4gIHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgb3B0aW9uczogTG9jYWxOb3RpZmljYXRpb25PcHRpb25zKSB7XG4gICAgaWYgKFxuICAgICAgY2hlY2tBdmFpbGFiaWxpdHkoXG4gICAgICAgIFBob25lZ2FwTG9jYWxOb3RpZmljYXRpb24ucGx1Z2luUmVmLFxuICAgICAgICBudWxsLFxuICAgICAgICBQaG9uZWdhcExvY2FsTm90aWZpY2F0aW9uLnBsdWdpbk5hbWVcbiAgICAgICkgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmV3IE5vdGlmaWNhdGlvbih0aXRsZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgY2xvc2UoKTogdm9pZCB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsTm90aWZpY2F0aW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkaXJlY3Rpb24gb2YgdGhlIG5vdGlmaWNhdGlvbi4gT25lIG9mIFwiYXV0b1wiLCBcImx0clwiIG9yIFwicnRsXCJcbiAgICovXG4gIGRpcj86IHN0cmluZztcblxuICAvKipcbiAgICogIFNldHMgdGhlIGxhbmd1YWdlIG9mIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIGxhbmc/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGJvZHkgb2YgdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgYm9keT86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0cyB0aGUgaWRlbnRpZnlpbmcgdGFnIG9mIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIHRhZz86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0cyB0aGUgaWNvbiBvZiB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIFBob25lZ2FwIExvY2FsIE5vdGlmaWNhdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgTG9jYWwgTm90aWZpY2F0aW9uIHBsdWdpbiBnaXZlcyBkZXZlbG9wZXJzIHRoZSBhYmlsaXR5IHRvIHBvc3Qgbm90aWZpY2F0aW9ucyBmcm9tIHRoZWlyIGFwcCB0aGF0IHNob3cgdXAgaW4gdGhlIGRldmljZeKAmXMgbm90aWZpY2F0aW9uIGFyZWEuXG4gKiBUaGUgQVBJIGZvciB0aGUgbG9jYWwgbm90aWZpY2F0aW9uIHBsdWdpbiBmb2xsb3dzIHRoZSBXM0MgV2ViIE5vdGlmaWNhdGlvbnMgc3BlY2lmaWNhdGlvbjogaHR0cHM6Ly93d3cudzMub3JnL1RSL25vdGlmaWNhdGlvbnMvXG4gKlxuICogQHVzYWdlXG4gKiBgYGBcbiAqIGltcG9ydCB7IFBob25lZ2FwTG9jYWxOb3RpZmljYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3Bob25lZ2FwLWxvY2FsLW5vdGlmaWNhdGlvbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsTm90aWZpY2F0aW9uOiBQaG9uZWdhcExvY2FsTm90aWZpY2F0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmxvY2FsTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbihcbiAqICAgKHBlcm1pc3Npb24pID0+IHtcbiAqICAgICBpZiAocGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XG4gKlxuICogICAgICAgLy8gQ3JlYXRlIHRoZSBub3RpZmljYXRpb25cbiAqICAgICAgIHRoaXMubG9jYWxOb3RpZmljYXRpb24uY3JlYXRlKCdNeSBUaXRsZScsIHtcbiAqICAgICAgICAgdGFnOiAnbWVzc2FnZTEnLFxuICogICAgICAgICBib2R5OiAnTXkgYm9keScsXG4gKiAgICAgICAgIGljb246ICdhc3NldHMvaWNvbi9mYXZpY29uLmljbydcbiAqICAgICAgIH0pO1xuICpcbiAqICAgICB9XG4gKiAgIH1cbiAqICk7XG4gKlxuICogYGBgXG4gKlxuICogQGludGVyZmFjZXNcbiAqIExvY2FsTm90aWZpY2F0aW9uT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1Bob25lZ2FwIExvY2FsIE5vdGlmaWNhdGlvbnMnLFxuICBwbHVnaW46ICdwaG9uZWdhcC1wbHVnaW4tbG9jYWwtbm90aWZpY2F0aW9uJyxcbiAgcGx1Z2luUmVmOiAnTm90aWZpY2F0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9waG9uZWdhcC9waG9uZWdhcC1wbHVnaW4tbG9jYWwtbm90aWZpY2F0aW9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBob25lZ2FwTG9jYWxOb3RpZmljYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBBIGdsb2JhbCBvYmplY3QgdGhhdCBsZXRzIHlvdSBpbnRlcmFjdCB3aXRoIHRoZSBOb3RpZmljYXRpb24gQVBJLlxuICAgKiBAcGFyYW0gdGl0bGUge3N0cmluZ30gVGl0bGUgb2YgdGhlIGxvY2FsIG5vdGlmaWNhdGlvbi5cbiAgICogQHBhcmFtIE9wdGlvbnMge0xvY2FsTm90aWZpY2F0aW9uT3B0aW9uc30gQW4gb2JqZWN0IGNvbnRhaW5pbmcgb3B0aW9uYWwgcHJvcGVydHkvdmFsdWUgcGFpcnMuXG4gICAqIEByZXR1cm5zIHtQTE5PYmplY3R9XG4gICAqL1xuICBjcmVhdGUodGl0bGU6IHN0cmluZywgb3B0aW9uczogTG9jYWxOb3RpZmljYXRpb25PcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQTE5PYmplY3QodGl0bGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcXVlc3RzIHBlcm1pc3Npb24gZnJvbSB0aGUgdXNlciB0byBzaG93IGEgbG9jYWwgbm90aWZpY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19