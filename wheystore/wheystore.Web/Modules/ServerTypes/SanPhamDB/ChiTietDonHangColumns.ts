import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ChiTietDonHangRow } from "./ChiTietDonHangRow";

export interface ChiTietDonHangColumns {
    ChiTietDonHangId: Column<ChiTietDonHangRow>;
    MaDh: Column<ChiTietDonHangRow>;
    MaSp: Column<ChiTietDonHangRow>;
    TenSp: Column<ChiTietDonHangRow>;
    AnhSp: Column<ChiTietDonHangRow>;
    DonGia: Column<ChiTietDonHangRow>;
    GiamGia: Column<ChiTietDonHangRow>;
    SoLuong: Column<ChiTietDonHangRow>;
    ThanhTien: Column<ChiTietDonHangRow>;
}

export class ChiTietDonHangColumns extends ColumnsBase<ChiTietDonHangRow> {
    static readonly columnsKey = 'SanPhamDB.ChiTietDonHang';
    static readonly Fields = fieldsProxy<ChiTietDonHangColumns>();
}