import { EntityGrid } from '@serenity-is/corelib';
import { DanhMucTinTucColumns, DanhMucTinTucRow, DanhMucTinTucService } from '../../ServerTypes/SanPhamDB';
import { DanhMucTinTucDialog } from './DanhMucTinTucDialog';

export class DanhMucTinTucGrid extends EntityGrid<DanhMucTinTucRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return DanhMucTinTucColumns.columnsKey; }
    protected override getDialogType() { return DanhMucTinTucDialog; }
    protected override getRowDefinition() { return DanhMucTinTucRow; }
    protected override getService() { return DanhMucTinTucService.baseUrl; }
}