import { EntityGrid } from '@serenity-is/corelib';
import { DonHangColumns, DonHangRow, DonHangService } from '../../ServerTypes/SanPhamDB';
import { DonHangDialog } from './DonHangDialog';

export class DonHangGrid extends EntityGrid<DonHangRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return DonHangColumns.columnsKey; }
    protected override getDialogType() { return DonHangDialog; }
    protected override getRowDefinition() { return DonHangRow; }
    protected override getService() { return DonHangService.baseUrl; }
}