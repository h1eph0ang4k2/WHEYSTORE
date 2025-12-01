using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1414)]
public class DefaultDB_20251122_1414_QuaTang : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("QuaTang")
    .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
    .WithColumn("TenQua").AsString(200).NotNullable()
    .WithColumn("GiaTri").AsDecimal(18, 0).Nullable()      
    .WithColumn("MoTa").AsString(int.MaxValue).Nullable()
    .WithColumn("Anh").AsString(255).Nullable();
    }
}