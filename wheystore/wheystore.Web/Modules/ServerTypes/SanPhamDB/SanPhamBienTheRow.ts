import { fieldsProxy } from "@serenity-is/corelib";

export interface SanPhamBienTheRow {
    Id?: number;
    SanPhamId?: number;
    TenBienThe?: string;
    GiaBan?: number;
    GiaKhuyenMai?: number;
    SoLuong?: number;
    IsDefault?: boolean;
    SanPhamTenSp?: string;
}

export abstract class SanPhamBienTheRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'TenBienThe';
    static readonly localTextPrefix = 'SanPhamDB.SanPhamBienThe';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SanPhamBienTheRow>();
}