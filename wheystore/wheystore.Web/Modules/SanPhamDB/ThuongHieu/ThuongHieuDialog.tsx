import { EntityDialog } from '@serenity-is/corelib';
import { ThuongHieuForm, ThuongHieuRow, ThuongHieuService } from '../../ServerTypes/SanPhamDB';

export class ThuongHieuDialog extends EntityDialog<ThuongHieuRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return ThuongHieuForm.formKey; }
    protected override getRowDefinition() { return ThuongHieuRow; }
    protected override getService() { return ThuongHieuService.baseUrl; }

    protected form = new ThuongHieuForm(this.idPrefix);
}