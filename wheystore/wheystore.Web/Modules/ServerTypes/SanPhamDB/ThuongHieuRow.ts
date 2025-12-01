import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface ThuongHieuRow {
    Id?: number;
    TenThuongHieu?: string;
    Slug?: string;
    Logo?: string;
    MoTa?: string;
    ThuTu?: number;
    HienThi?: boolean;
    NoiBat?: boolean;
    CreatedAt?: string;
    UpdatedAt?: string;
}

export abstract class ThuongHieuRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'TenThuongHieu';
    static readonly localTextPrefix = 'SanPhamDB.ThuongHieu';
    static readonly lookupKey = 'SanPhamDB.ThuongHieu';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<ThuongHieuRow>('SanPhamDB.ThuongHieu') }
    static async getLookupAsync() { return getLookupAsync<ThuongHieuRow>('SanPhamDB.ThuongHieu') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ThuongHieuRow>();
}