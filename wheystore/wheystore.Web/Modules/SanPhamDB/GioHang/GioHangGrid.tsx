import { EntityGrid } from '@serenity-is/corelib';
import { GioHangColumns, GioHangRow, GioHangService } from '../../ServerTypes/SanPhamDB';
import { GioHangDialog } from './GioHangDialog';

export class GioHangGrid extends EntityGrid<GioHangRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return GioHangColumns.columnsKey; }
    protected override getDialogType() { return GioHangDialog; }
    protected override getRowDefinition() { return GioHangRow; }
    protected override getService() { return GioHangService.baseUrl; }
}