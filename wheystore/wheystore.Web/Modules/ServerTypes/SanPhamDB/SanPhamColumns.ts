import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SanPhamRow } from "./SanPhamRow";

export interface SanPhamColumns {
    MaSp: Column<SanPhamRow>;
    HienThi: Column<SanPhamRow>;
    TenSp: Column<SanPhamRow>;
    GiaBan: Column<SanPhamRow>;
    DanhMucSanPham: Column<SanPhamRow>;
    TenNhaCungCap: Column<SanPhamRow>;
    TenThuongHieu: Column<SanPhamRow>;
    SoLuong: Column<SanPhamRow>;
    MoTa: Column<SanPhamRow>;
    GiamGia: Column<SanPhamRow>;
    GiaKhuyenMai: Column<SanPhamRow>;
    AnhSp: Column<SanPhamRow>;
    AnhSpCt: Column<SanPhamRow>;
    CreatedAt: Column<SanPhamRow>;
    UpdatedAt: Column<SanPhamRow>;
}

export class SanPhamColumns extends ColumnsBase<SanPhamRow> {
    static readonly columnsKey = 'SanPhamDB.SanPham';
    static readonly Fields = fieldsProxy<SanPhamColumns>();
}