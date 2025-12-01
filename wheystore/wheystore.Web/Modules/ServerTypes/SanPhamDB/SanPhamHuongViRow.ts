import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface SanPhamHuongViRow {
    Id?: number;
    SanPhamId?: number;
    TenHuongVi?: string;
    IsDefault?: boolean;
    SanPhamTenSp?: string;
}

export abstract class SanPhamHuongViRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'TenHuongVi';
    static readonly localTextPrefix = 'SanPhamDB.SanPhamHuongVi';
    static readonly lookupKey = 'SanPhamDB.SanPhamHuongVi';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<SanPhamHuongViRow>('SanPhamDB.SanPhamHuongVi') }
    static async getLookupAsync() { return getLookupAsync<SanPhamHuongViRow>('SanPhamDB.SanPhamHuongVi') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SanPhamHuongViRow>();
}