import { EntityGrid } from '@serenity-is/corelib';
import { SanPhamChiTietColumns, SanPhamChiTietRow, SanPhamChiTietService } from '../../ServerTypes/SanPhamDB';
import { SanPhamChiTietDialog } from './SanPhamChiTietDialog';

export class SanPhamChiTietGrid extends EntityGrid<SanPhamChiTietRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return SanPhamChiTietColumns.columnsKey; }
    protected override getDialogType() { return SanPhamChiTietDialog; }
    protected override getRowDefinition() { return SanPhamChiTietRow; }
    protected override getService() { return SanPhamChiTietService.baseUrl; }
}