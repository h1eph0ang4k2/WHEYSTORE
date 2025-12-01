import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface DanhMucSanPhamRow {
    MaLoai?: number;
    TenLoai?: string;
    MoTa?: string;
}

export abstract class DanhMucSanPhamRow {
    static readonly idProperty = 'MaLoai';
    static readonly nameProperty = 'TenLoai';
    static readonly localTextPrefix = 'SanPhamDB.DanhMucSanPham';
    static readonly lookupKey = 'SanPhamDB.DanhMucSanPham';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<DanhMucSanPhamRow>('SanPhamDB.DanhMucSanPham') }
    static async getLookupAsync() { return getLookupAsync<DanhMucSanPhamRow>('SanPhamDB.DanhMucSanPham') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<DanhMucSanPhamRow>();
}