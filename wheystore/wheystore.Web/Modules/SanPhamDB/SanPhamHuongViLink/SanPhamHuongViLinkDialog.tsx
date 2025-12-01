import { EntityDialog } from '@serenity-is/corelib';
import { SanPhamHuongViLinkForm, SanPhamHuongViLinkRow, SanPhamHuongViLinkService } from '../../ServerTypes/SanPhamDB';

export class SanPhamHuongViLinkDialog extends EntityDialog<SanPhamHuongViLinkRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return SanPhamHuongViLinkForm.formKey; }
    protected override getRowDefinition() { return SanPhamHuongViLinkRow; }
    protected override getService() { return SanPhamHuongViLinkService.baseUrl; }

    protected form = new SanPhamHuongViLinkForm(this.idPrefix);
}