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
    TinhThanhId: Column<KhachHangRow>;
    QuanHuyenId: Column<KhachHangRow>;
    XaPhuongId: Column<KhachHangRow>;
    TinhThanhTen: Column<KhachHangRow>;
    QuanHuyenTen: Column<KhachHangRow>;
    XaPhuongTen: Column<KhachHangRow>;
    MaBuuChinh: Column<KhachHangRow>;
    NgaySinh: Column<KhachHangRow>;
    GioiTinh: Column<KhachHangRow>;
}

export class KhachHangColumns extends ColumnsBase<KhachHangRow> {
    static readonly columnsKey = 'SanPhamDB.KhachHang';
    static readonly Fields = fieldsProxy<KhachHangColumns>();
}