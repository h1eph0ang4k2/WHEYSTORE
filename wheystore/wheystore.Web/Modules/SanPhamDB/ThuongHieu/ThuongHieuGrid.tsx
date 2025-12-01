import { EntityGrid } from '@serenity-is/corelib';
import { ThuongHieuColumns, ThuongHieuRow, ThuongHieuService } from '../../ServerTypes/SanPhamDB';
import { ThuongHieuDialog } from './ThuongHieuDialog';

export class ThuongHieuGrid extends EntityGrid<ThuongHieuRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return ThuongHieuColumns.columnsKey; }
    protected override getDialogType() { return ThuongHieuDialog; }
    protected override getRowDefinition() { return ThuongHieuRow; }
    protected override getService() { return ThuongHieuService.baseUrl; }
}