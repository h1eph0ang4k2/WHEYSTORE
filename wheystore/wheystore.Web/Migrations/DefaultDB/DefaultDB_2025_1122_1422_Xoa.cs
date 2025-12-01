using FluentMigrator;
using Serenity.Extensions;

namespace wheystore.Migrations.DefaultDB
{
    [MigrationKey(20251122_1422)]
    public class DefaultDB_20251122_1422_Xoa
        : AutoReversingMigration
    {
        public override void Up()
        { 
            Alter.Table("SanPhamChiTiet")
                .AlterColumn("SanPhamId").AsInt32().Nullable();         
            Alter.Table("SanPhamNoiDung")
                .AlterColumn("SanPhamId").AsInt32().Nullable();         
            Alter.Table("SanPhamQuaTang")
                .AlterColumn("SanPhamId").AsInt32().Nullable();
            Alter.Table("SanPhamBienThe")
                .AlterColumn("SanPhamId").AsInt32().Nullable();
            Alter.Table("SanPhamHuongVi")
               .AlterColumn("SanPhamId").AsInt32().Nullable();
        }
    }
}