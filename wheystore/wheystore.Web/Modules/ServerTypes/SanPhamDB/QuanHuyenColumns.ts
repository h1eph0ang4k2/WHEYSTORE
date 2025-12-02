import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { QuanHuyenRow } from "./QuanHuyenRow";

export interface QuanHuyenColumns {
    Id: Column<QuanHuyenRow>;
    TenQuanHuyen: Column<QuanHuyenRow>;
    TinhThanhTenTinhThanh: Column<QuanHuyenRow>;
}

export class QuanHuyenColumns extends ColumnsBase<QuanHuyenRow> {
    static readonly columnsKey = 'SanPhamDB.QuanHuyen';
    static readonly Fields = fieldsProxy<QuanHuyenColumns>();
}