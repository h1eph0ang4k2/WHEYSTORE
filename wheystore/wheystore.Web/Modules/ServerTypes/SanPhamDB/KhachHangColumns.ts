import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { KhachHangRow } from "./KhachHangRow";

export interface KhachHangColumns {
    Id: Column<KhachHangRow>;
    UserId: Column<KhachHangRow>;
    HoTen: Column<KhachHangRow>;
    DienThoai: Column<KhachHangRow>;
    Email: Column<KhachHangRow>;
    DiaChi: Column<KhachHangRow>;
    PhuongXa: Column<KhachHangRow>;
    QuanHuyen: Column<KhachHangRow>;
    TinhThanh: Column<KhachHangRow>;
    MaBuuChinh: Column<KhachHangRow>;
    NgaySinh: Column<KhachHangRow>;
    GioiTinh: Column<KhachHangRow>;
}

export class KhachHangColumns extends ColumnsBase<KhachHangRow> {
    static readonly columnsKey = 'SanPhamDB.KhachHang';
    static readonly Fields = fieldsProxy<KhachHangColumns>();
}