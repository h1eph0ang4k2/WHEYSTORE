import { fieldsProxy } from "@serenity-is/corelib";

export interface KhachHangRow {
    Id?: number;
    UserId?: number;
    HoTen?: string;
    DienThoai?: string;
    Email?: string;
    DiaChi?: string;
    PhuongXa?: string;
    QuanHuyen?: string;
    TinhThanh?: string;
    MaBuuChinh?: string;
    NgaySinh?: string;
    GioiTinh?: number;
}

export abstract class KhachHangRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'HoTen';
    static readonly localTextPrefix = 'SanPhamDB.KhachHang';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<KhachHangRow>();
}