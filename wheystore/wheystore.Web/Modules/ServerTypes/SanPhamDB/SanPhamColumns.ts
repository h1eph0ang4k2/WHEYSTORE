import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SanPhamRow } from "./SanPhamRow";

export interface SanPhamColumns {
    MaSp: Column<SanPhamRow>;
    TenSp: Column<SanPhamRow>;
    GiaBan: Column<SanPhamRow>;
    SoLuong: Column<SanPhamRow>;
    MoTa: Column<SanPhamRow>;
    AnhSp: Column<SanPhamRow>;
    AnhSpCt: Column<SanPhamRow>;
    GiamGia: Column<SanPhamRow>;
    GiaKhuyenMai: Column<SanPhamRow>;
    HienThi: Column<SanPhamRow>;
    DanhMucSanPham: Column<SanPhamRow>;
    TenNhaCungCap: Column<SanPhamRow>;
    CreatedAt: Column<SanPhamRow>;
    UpdatedAt: Column<SanPhamRow>;
    TenThuongHieu: Column<SanPhamRow>;
}

export class SanPhamColumns extends ColumnsBase<SanPhamRow> {
    static readonly columnsKey = 'SanPhamDB.SanPham';
    static readonly Fields = fieldsProxy<SanPhamColumns>();
}