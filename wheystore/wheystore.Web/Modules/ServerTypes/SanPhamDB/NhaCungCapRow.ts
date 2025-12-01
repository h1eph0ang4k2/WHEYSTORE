import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface NhaCungCapRow {
    MaNcc?: number;
    TenCongTy?: string;
    TenLienHe?: string;
    ChucDanhLienHe?: string;
    DiaChi?: string;
    ThanhPho?: string;
    MaBuuChinh?: string;
    QuocGia?: string;
    SoDienThoai?: string;
    MaSoThue?: string;
    TrangChu?: string;
    CreatedAt?: string;
}

export abstract class NhaCungCapRow {
    static readonly idProperty = 'MaNcc';
    static readonly nameProperty = 'TenCongTy';
    static readonly localTextPrefix = 'SanPhamDB.NhaCungCap';
    static readonly lookupKey = 'SanPhamDB.NhaCungCap';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<NhaCungCapRow>('SanPhamDB.NhaCungCap') }
    static async getLookupAsync() { return getLookupAsync<NhaCungCapRow>('SanPhamDB.NhaCungCap') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<NhaCungCapRow>();
}