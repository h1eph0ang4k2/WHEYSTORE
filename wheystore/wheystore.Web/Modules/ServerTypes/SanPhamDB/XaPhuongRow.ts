import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface XaPhuongRow {
    Id?: number;
    TenXaPhuong?: string;
    QuanHuyenId?: number;
    QuanHuyenTenQuanHuyen?: string;
}

export abstract class XaPhuongRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'TenXaPhuong';
    static readonly localTextPrefix = 'SanPhamDB.XaPhuong';
    static readonly lookupKey = 'SanPhamDB.XaPhuong';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<XaPhuongRow>('SanPhamDB.XaPhuong') }
    static async getLookupAsync() { return getLookupAsync<XaPhuongRow>('SanPhamDB.XaPhuong') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<XaPhuongRow>();
}