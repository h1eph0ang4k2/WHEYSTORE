import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface TinhThanhRow {
    Id?: number;
    TenTinhThanh?: string;
}

export abstract class TinhThanhRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'TenTinhThanh';
    static readonly localTextPrefix = 'SanPhamDB.TinhThanh';
    static readonly lookupKey = 'SanPhamDB.TinhThanh';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<TinhThanhRow>('SanPhamDB.TinhThanh') }
    static async getLookupAsync() { return getLookupAsync<TinhThanhRow>('SanPhamDB.TinhThanh') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TinhThanhRow>();
}