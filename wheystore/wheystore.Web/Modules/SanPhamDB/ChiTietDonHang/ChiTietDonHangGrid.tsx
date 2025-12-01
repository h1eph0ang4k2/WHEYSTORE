import { EntityGrid } from '@serenity-is/corelib';
import { ChiTietDonHangColumns, ChiTietDonHangRow, ChiTietDonHangService } from '../../ServerTypes/SanPhamDB';
import { ChiTietDonHangDialog } from './ChiTietDonHangDialog';

export class ChiTietDonHangGrid extends EntityGrid<ChiTietDonHangRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return ChiTietDonHangColumns.columnsKey; }
    protected override getDialogType() { return ChiTietDonHangDialog; }
    protected override getRowDefinition() { return ChiTietDonHangRow; }
    protected override getService() { return ChiTietDonHangService.baseUrl; }
}