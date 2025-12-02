import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface KhachHangRow {
    Id?: number;
    UserId?: number;
    HoTen?: string;
    DienThoai?: string;
    Email?: string;
    DiaChi?: string;
    MaBuuChinh?: string;
    NgaySinh?: string;
    GioiTinh?: number;
    TinhThanhId?: number;
    TinhThanhTen?: string;
    QuanHuyenId?: number;
    QuanHuyenTen?: string;
    XaPhuongId?: number;
    XaPhuongTen?: string;
}

export abstract class KhachHangRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'HoTen';
    static readonly localTextPrefix = 'SanPhamDB.KhachHang';
    static readonly lookupKey = 'SanPhamDB.KhachHang';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<KhachHangRow>('SanPhamDB.KhachHang') }
    static async getLookupAsync() { return getLookupAsync<KhachHangRow>('SanPhamDB.KhachHang') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<KhachHangRow>();
}