using FluentMigrator;
using Serenity.Extensions;

namespace wheystore.Migrations.DefaultDB
{
    [MigrationKey(20251201_1423)]
    public class DefaultDB_20251201_1423_Them
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