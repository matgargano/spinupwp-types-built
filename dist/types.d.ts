declare enum UbuntuVersion {
    V1804 = "18.04",
    V2004 = "20.04",
    V2204 = "22.04",
    V2404 = "24.04"
}
declare enum ConnectionStatus {
    Connected = "connected",
    Disconnected = "disconnected"
}
declare enum ServerStatus {
    Provisioning = "provisioning",
    Provisioned = "provisioned",
    Failed = "failed"
}
declare enum SiteStatus {
    Deploying = "deploying",
    Deployed = "deployed",
    Failed = "failed"
}
declare enum EventStatus {
    Queued = "queued",
    Creating = "creating",
    Updating = "updating",
    Deleting = "deleting",
    Deployed = "deployed",
    Failed = "failed"
}
interface IDiskSpace {
    total: number;
    available: number;
    used: number;
    updated_at: string;
}
interface IDatabaseDetails {
    server: string;
    host: string;
    port: number;
}
interface IServer {
    id: number;
    name: string;
    provider_name: string;
    ubuntu_version: UbuntuVersion;
    ip_address: string;
    ssh_port: number;
    timezone: string;
    region: string;
    size: string;
    disk_space: IDiskSpace;
    database: IDatabaseDetails;
    ssh_publickey: string;
    git_publickey: string;
    connection_status: ConnectionStatus;
    reboot_required: boolean;
    upgrade_required: boolean;
    install_notes: string | null;
    created_at: string;
    status: ServerStatus;
}
interface IRedirect {
    enabled: boolean;
}
interface IAdditionalDomain {
    domain: string;
    redirect: IRedirect;
    created_at: string;
}
interface IPagination {
    previous: string | null;
    next: string | null;
    per_page: number;
    count: number;
}
interface IEvent {
    id: number;
    initiated_by: string;
    server_id: number;
    name: string;
    status: EventStatus;
    output: string | null;
    created_at: string;
    started_at: string;
    finished_at: string;
}
interface INginxOptions {
    uploads_directory_protected: boolean;
    xmlrpc_protected: boolean;
    subdirectory_rewrite_in_place: boolean;
}
interface IBackupDetails {
    files: boolean;
    database: boolean;
    paths_to_exclude: string;
    retention_period: number;
    next_run_time: string;
    storage_provider: IStorageProvider;
}
interface IStorageProvider {
    id: number;
    region: string;
    bucket: string;
}
interface IGitDetails {
    repo: string;
    branch: string;
    deploy_script: string;
    push_enabled: boolean;
    deployment_url: string;
}
interface IBasicAuth {
    enabled: boolean;
    username: string;
}
interface IDatabase {
    id: number;
    user_id: number;
    table_prefix: string;
}
interface ISite {
    id: number;
    server_id: number;
    domain: string;
    additional_domains: IAdditionalDomain[];
    site_user: string;
    php_version: string;
    public_folder: string;
    is_wordpress: boolean;
    page_cache: IPageCache;
    https: IHTTPS;
    nginx: INginxOptions;
    database: IDatabase;
    backups: IBackupDetails;
    wp_core_update: boolean;
    wp_theme_updates: number;
    wp_plugin_updates: number;
    git: IGitDetails;
    basic_auth: IBasicAuth;
    created_at: string;
    status: SiteStatus;
}
interface IPageCache {
    enabled: boolean;
}
interface IHTTPS {
    enabled: boolean;
    certificate_path: string;
    private_key_path: string;
}
export { IServer, ISite, IEvent, IAdditionalDomain, IPagination };
