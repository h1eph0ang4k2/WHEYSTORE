using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1420)]
public class DefaultDB_20251122_1420_Addthuonghieu: AutoReversingMigration
{
    public override void Up()
    {
        Alter.Table("SanPham")
           .AddColumn("ThuongHieuId").AsInt32().Nullable()
               .ForeignKey("FK_SanPham_ThuongHieu", "ThuongHieu", "Id");
    }
}