import { fieldsProxy } from "@serenity-is/corelib";

export interface ChiTietDonHangRow {
    ChiTietDonHangId?: number;
    MaDh?: number;
    MaSp?: number;
    TenSp?: string;
    AnhSp?: string;
    DonGia?: number;
    GiamGia?: number;
    SoLuong?: number;
    ThanhTien?: number;
}

export abstract class ChiTietDonHangRow {
    static readonly idProperty = 'ChiTietDonHangId';
    static readonly nameProperty = 'TenSp';
    static readonly localTextPrefix = 'SanPhamDB.ChiTietDonHang';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ChiTietDonHangRow>();
}