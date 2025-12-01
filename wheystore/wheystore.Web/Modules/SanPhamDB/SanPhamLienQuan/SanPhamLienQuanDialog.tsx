import { EntityDialog } from '@serenity-is/corelib';
import { SanPhamLienQuanForm, SanPhamLienQuanRow, SanPhamLienQuanService } from '../../ServerTypes/SanPhamDB';

export class SanPhamLienQuanDialog extends EntityDialog<SanPhamLienQuanRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return SanPhamLienQuanForm.formKey; }
    protected override getRowDefinition() { return SanPhamLienQuanRow; }
    protected override getService() { return SanPhamLienQuanService.baseUrl; }

    protected form = new SanPhamLienQuanForm(this.idPrefix);
}