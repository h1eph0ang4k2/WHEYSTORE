import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface SanPhamRow {
    MaSp?: number;
    TenSp?: string;
    GiaBan?: number;
    SoLuong?: number;
    MoTa?: string;
    MaLoai?: number;
    NhaCungCap?: number;
    AnhSp?: string;
    AnhSpCt?: string;
    GiamGia?: number;
    GiaKhuyenMai?: number;
    HienThi?: boolean;
    CreatedAt?: string;
    UpdatedAt?: string;
    DanhMucSanPham?: string;
    TenNhaCungCap?: string;
    ThuongHieuId?: number;
    TenThuongHieu?: string;
    HuongViList?: number[];
}

export abstract class SanPhamRow {
    static readonly idProperty = 'MaSp';
    static readonly nameProperty = 'TenSp';
    static readonly localTextPrefix = 'SanPhamDB.SanPham';
    static readonly lookupKey = 'SanPhamDB.SanPham';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<SanPhamRow>('SanPhamDB.SanPham') }
    static async getLookupAsync() { return getLookupAsync<SanPhamRow>('SanPhamDB.SanPham') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SanPhamRow>();
}