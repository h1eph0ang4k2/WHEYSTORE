import { EntityGrid } from '@serenity-is/corelib';
import { SanPhamQuaTangColumns, SanPhamQuaTangRow, SanPhamQuaTangService } from '../../ServerTypes/SanPhamDB';
import { SanPhamQuaTangDialog } from './SanPhamQuaTangDialog';

export class SanPhamQuaTangGrid extends EntityGrid<SanPhamQuaTangRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return SanPhamQuaTangColumns.columnsKey; }
    protected override getDialogType() { return SanPhamQuaTangDialog; }
    protected override getRowDefinition() { return SanPhamQuaTangRow; }
    protected override getService() { return SanPhamQuaTangService.baseUrl; }
}