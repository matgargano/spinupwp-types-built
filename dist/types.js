// Enums for known values
var UbuntuVersion;
(function (UbuntuVersion) {
    UbuntuVersion["V1804"] = "18.04";
    UbuntuVersion["V2004"] = "20.04";
    UbuntuVersion["V2204"] = "22.04";
    UbuntuVersion["V2404"] = "24.04";
})(UbuntuVersion || (UbuntuVersion = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["Connected"] = "connected";
    ConnectionStatus["Disconnected"] = "disconnected";
})(ConnectionStatus || (ConnectionStatus = {}));
var ServerStatus;
(function (ServerStatus) {
    ServerStatus["Provisioning"] = "provisioning";
    ServerStatus["Provisioned"] = "provisioned";
    ServerStatus["Failed"] = "failed";
})(ServerStatus || (ServerStatus = {}));
var SiteStatus;
(function (SiteStatus) {
    SiteStatus["Deploying"] = "deploying";
    SiteStatus["Deployed"] = "deployed";
    SiteStatus["Failed"] = "failed";
})(SiteStatus || (SiteStatus = {}));
var EventStatus;
(function (EventStatus) {
    EventStatus["Queued"] = "queued";
    EventStatus["Creating"] = "creating";
    EventStatus["Updating"] = "updating";
    EventStatus["Deleting"] = "deleting";
    EventStatus["Deployed"] = "deployed";
    EventStatus["Failed"] = "failed";
})(EventStatus || (EventStatus = {}));
export {};
