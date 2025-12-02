import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { XaPhuongRow } from "./XaPhuongRow";

export interface XaPhuongColumns {
    Id: Column<XaPhuongRow>;
    TenXaPhuong: Column<XaPhuongRow>;
    QuanHuyenTen: Column<XaPhuongRow>;
}

export class XaPhuongColumns extends ColumnsBase<XaPhuongRow> {
    static readonly columnsKey = 'SanPhamDB.XaPhuong';
    static readonly Fields = fieldsProxy<XaPhuongColumns>();
}