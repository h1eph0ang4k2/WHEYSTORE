import { EntityGrid } from '@serenity-is/corelib';
import { MaGiamGiaColumns, MaGiamGiaRow, MaGiamGiaService } from '../../ServerTypes/SanPhamDB';
import { MaGiamGiaDialog } from './MaGiamGiaDialog';

export class MaGiamGiaGrid extends EntityGrid<MaGiamGiaRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return MaGiamGiaColumns.columnsKey; }
    protected override getDialogType() { return MaGiamGiaDialog; }
    protected override getRowDefinition() { return MaGiamGiaRow; }
    protected override getService() { return MaGiamGiaService.baseUrl; }
}