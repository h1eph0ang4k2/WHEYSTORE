import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { NhaCungCapRow } from "./NhaCungCapRow";

export interface NhaCungCapColumns {
    MaNcc: Column<NhaCungCapRow>;
    TenCongTy: Column<NhaCungCapRow>;
    TenLienHe: Column<NhaCungCapRow>;
    ChucDanhLienHe: Column<NhaCungCapRow>;
    DiaChi: Column<NhaCungCapRow>;
    ThanhPho: Column<NhaCungCapRow>;
    MaBuuChinh: Column<NhaCungCapRow>;
    QuocGia: Column<NhaCungCapRow>;
    SoDienThoai: Column<NhaCungCapRow>;
    MaSoThue: Column<NhaCungCapRow>;
    TrangChu: Column<NhaCungCapRow>;
    CreatedAt: Column<NhaCungCapRow>;
}

export class NhaCungCapColumns extends ColumnsBase<NhaCungCapRow> {
    static readonly columnsKey = 'SanPhamDB.NhaCungCap';
    static readonly Fields = fieldsProxy<NhaCungCapColumns>();
}