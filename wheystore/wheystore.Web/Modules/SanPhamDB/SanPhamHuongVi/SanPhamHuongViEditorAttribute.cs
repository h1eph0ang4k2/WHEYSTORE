using Serenity.ComponentModel;

namespace wheystore.SanPhamDB;

public class SanPhamHuongViEditorAttribute : CustomEditorAttribute
{
    public const string Key = "SanPhamDB.SanPhamHuongViEditor";

    public SanPhamHuongViEditorAttribute()
        : base(Key)
    {
    }
}