import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface QuanHuyenRow {
    Id?: number;
    TenQuanHuyen?: string;
    TinhThanhId?: number;
    TinhThanhTenTinhThanh?: string;
}

export abstract class QuanHuyenRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'TenQuanHuyen';
    static readonly localTextPrefix = 'SanPhamDB.QuanHuyen';
    static readonly lookupKey = 'SanPhamDB.QuanHuyen';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<QuanHuyenRow>('SanPhamDB.QuanHuyen') }
    static async getLookupAsync() { return getLookupAsync<QuanHuyenRow>('SanPhamDB.QuanHuyen') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<QuanHuyenRow>();
}