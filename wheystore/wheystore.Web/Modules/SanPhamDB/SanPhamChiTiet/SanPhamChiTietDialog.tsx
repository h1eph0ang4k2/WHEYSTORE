import { EntityDialog } from '@serenity-is/corelib';
import { SanPhamChiTietForm, SanPhamChiTietRow, SanPhamChiTietService } from '../../ServerTypes/SanPhamDB';

export class SanPhamChiTietDialog extends EntityDialog<SanPhamChiTietRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return SanPhamChiTietForm.formKey; }
    protected override getRowDefinition() { return SanPhamChiTietRow; }
    protected override getService() { return SanPhamChiTietService.baseUrl; }

    protected form = new SanPhamChiTietForm(this.idPrefix);
}