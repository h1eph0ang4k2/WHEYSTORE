import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { DonHangRow } from "./DonHangRow";

export interface DonHangColumns {
    MaDh: Column<DonHangRow>;
    MaKhachHang: Column<DonHangRow>;
    HoTenNguoiNhan: Column<DonHangRow>;
    DiaChiNguoiNhan: Column<DonHangRow>;
    SoDienThoaiNguoiNhan: Column<DonHangRow>;
    EmailNguoiNhan: Column<DonHangRow>;
    TinhThanhNguoiNhan: Column<DonHangRow>;
    QuanHuyenNguoiNhan: Column<DonHangRow>;
    PhuongXaNguoiNhan: Column<DonHangRow>;
    MaBuuChinhNguoiNhan: Column<DonHangRow>;
    ShipperId: Column<DonHangRow>;
    NgayDatHang: Column<DonHangRow>;
    NgayGiaoHangDuKhien: Column<DonHangRow>;
    NgayGiaoHangHoanThanh: Column<DonHangRow>;
    TongTienHang: Column<DonHangRow>;
    PhiVanChuyen: Column<DonHangRow>;
    TongThanhToan: Column<DonHangRow>;
    GiamGiaDonHang: Column<DonHangRow>;
    PhuongThucThanhToan: Column<DonHangRow>;
    DaThanhToan: Column<DonHangRow>;
    TrangThaiDonHang: Column<DonHangRow>;
    GhiChu: Column<DonHangRow>;
    CreatedAt: Column<DonHangRow>;
    UpdatedAt: Column<DonHangRow>;
}

export class DonHangColumns extends ColumnsBase<DonHangRow> {
    static readonly columnsKey = 'SanPhamDB.DonHang';
    static readonly Fields = fieldsProxy<DonHangColumns>();
}