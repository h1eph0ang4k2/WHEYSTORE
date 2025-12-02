import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { TinhThanhRow } from "./TinhThanhRow";

export interface TinhThanhColumns {
    Id: Column<TinhThanhRow>;
    TenTinhThanh: Column<TinhThanhRow>;
}

export class TinhThanhColumns extends ColumnsBase<TinhThanhRow> {
    static readonly columnsKey = 'SanPhamDB.TinhThanh';
    static readonly Fields = fieldsProxy<TinhThanhColumns>();
}