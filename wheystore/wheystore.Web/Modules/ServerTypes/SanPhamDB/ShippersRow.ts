import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface ShippersRow {
    MaShipper?: number;
    MaShipperCode?: string;
    TenCongTy?: string;
    TenShipper?: string;
    SoDienThoai?: string;
}

export abstract class ShippersRow {
    static readonly idProperty = 'MaShipper';
    static readonly nameProperty = 'MaShipperCode';
    static readonly localTextPrefix = 'SanPhamDB.Shippers';
    static readonly lookupKey = 'SanPhamDB.Shippers';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<ShippersRow>('SanPhamDB.Shippers') }
    static async getLookupAsync() { return getLookupAsync<ShippersRow>('SanPhamDB.Shippers') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ShippersRow>();
}