import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface DonHangRow {
    MaDh?: number;
    MaKhachHang?: number;
    HoTenNguoiNhan?: string;
    DiaChiNguoiNhan?: string;
    SoDienThoaiNguoiNhan?: string;
    EmailNguoiNhan?: string;
    ShipperTen?: string;
    ShipperId?: number;
    NgayDatHang?: string;
    NgayGiaoHangDuKhien?: string;
    NgayGiaoHangHoanThanh?: string;
    TongTienHang?: number;
    PhiVanChuyen?: number;
    TongThanhToan?: number;
    GiamGiaDonHang?: number;
    PhuongThucThanhToan?: string;
    DaThanhToan?: boolean;
    GhiChu?: string;
    CreatedAt?: string;
    UpdatedAt?: string;
}

export abstract class DonHangRow {
    static readonly idProperty = 'MaDh';
    static readonly nameProperty = 'HoTenNguoiNhan';
    static readonly localTextPrefix = 'SanPhamDB.DonHang';
    static readonly lookupKey = 'SanPhamDB.DonHang';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<DonHangRow>('SanPhamDB.DonHang') }
    static async getLookupAsync() { return getLookupAsync<DonHangRow>('SanPhamDB.DonHang') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<DonHangRow>();
}