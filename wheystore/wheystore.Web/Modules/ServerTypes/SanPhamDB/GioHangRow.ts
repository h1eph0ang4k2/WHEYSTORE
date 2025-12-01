import { fieldsProxy } from "@serenity-is/corelib";

export interface GioHangRow {
    Id?: number;
    UserId?: number;
    MaSp?: number;
    SoLuong?: number;
    GiaLucThem?: number;
    NgayTao?: string;
    GhiChu?: string;
    Username?: string;
    MaSpTenSp?: string;
}

export abstract class GioHangRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'GhiChu';
    static readonly localTextPrefix = 'SanPhamDB.GioHang';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<GioHangRow>();
}