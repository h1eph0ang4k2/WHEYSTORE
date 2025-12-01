import { EntityDialog } from '@serenity-is/corelib';
import { MaGiamGiaForm, MaGiamGiaRow, MaGiamGiaService } from '../../ServerTypes/SanPhamDB';

export class MaGiamGiaDialog extends EntityDialog<MaGiamGiaRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return MaGiamGiaForm.formKey; }
    protected override getRowDefinition() { return MaGiamGiaRow; }
    protected override getService() { return MaGiamGiaService.baseUrl; }

    protected form = new MaGiamGiaForm(this.idPrefix);
}