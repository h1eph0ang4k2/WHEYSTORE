using Serenity.ComponentModel;
using System.ComponentModel;

namespace wheystore.SanPhamDB
{
    [EnumKey("SanPhamDB.GioiTinh")]   
    public enum GioiTinhEnum : short
    {
        [Description("Nam")]
        Nam = 1,

        [Description("Nữ")]
        Nu = 2
    }
}